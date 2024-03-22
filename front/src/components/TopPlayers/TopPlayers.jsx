import ActionButton from "../shared/ActionButton.jsx";
import { BeatLoader } from "react-spinners";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTopPlayers,
  getCsv,
  getLastStatistic,
} from "../../api/statistics/index.js";
import DataGrid from "../shared/DataGrid.jsx";

const TopPlayers = () => {
  const {
    data: topPlayers,
    isLoading,
  } = useQuery({
    queryKey: ["topPlayers"],
    queryFn: getTopPlayers,
    refetchInterval: 10 * 1000,
  });

  const { data: lastStatistic } = useQuery({
    queryKey: ["lastStatistic"],
    queryFn: getLastStatistic,
    refetchInterval: 10 * 1000,
  });

  // eslint-disable-next-line no-unused-vars
  const { mutate: csvMutation, isPending: isCsvPending } = useMutation({
    mutationFn: getCsv,
    onSuccess: (data) => {
      if(!data) {return}
      const blob = new Blob([data], { type: "text/csv" });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "Top_players.csv";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <div
          style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
        >
          {" "}
          <BeatLoader color="#36d7b7" size={32} />{" "}
        </div>
      ) : (
        topPlayers?.length && (
          <DataGrid columns={Object.keys(topPlayers[0])} rows={topPlayers} />
        )
      )}

      <div style={{}}>
        <p>
          Last report generated:{" "}
          {`${lastStatistic ? lastStatistic : "No Data Found"}`}
        </p>
      </div>

      {!isLoading && !topPlayers?.length ? (
        <div>No players to display</div>
      ) : (
        <></>
      )}

      <ActionButton
        title={"Download as CSV"}
        type={"primary"}
        disabled={!topPlayers?.length || isCsvPending}
        onClick={() => {
          csvMutation(topPlayers);
        }}
      />
    </div>
  );
};

export default TopPlayers;
