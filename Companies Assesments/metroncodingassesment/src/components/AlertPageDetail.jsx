import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AlertsContext } from "../context/AlertContext";

export default function AlertDetailPage() {
  const { id } = useParams();
  const { alerts } = useContext(AlertsContext);
  const alert = alerts.find((a) => a.id === id);

  if (!alert) return <p>Alert not found</p>;

  return (
    <div className="flex justify-center items-center">
    <div className="w-[30%] border border-black px-5 py-5">
      <div className="flex justify-between">
        <h2 className="text-2xl">Alert Details</h2>
        <p>
          <strong>ID:</strong> {alert.id}
        </p>
      </div>
      <p>
        <strong>Type:</strong> {alert.type}
      </p>
      <p>
        <strong>Severity:</strong> {alert.severity}
      </p>
      <p>
        <strong>Timestamp:</strong> {new Date(alert.timestamp).toLocaleString()}
      </p>
      <p>
        <strong>Source IP:</strong> {alert.sourceIp}
      </p>
      <p>
        <strong>Description:</strong> {alert.description}
      </p>
      <br />
      <Link className="border border-black rounded px-5 py-2 hover:bg-black hover:text-white" to="/alerts">
        ⬅️Back to Alerts
      </Link>
    </div>
    </div>
  );
}
