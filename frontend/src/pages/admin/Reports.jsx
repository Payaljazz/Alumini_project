import { useEffect, useState } from "react";
import { getReports } from "../../api/reportApi";
import Loader from "../../components/Loader";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReports()
      .then(res => setReports(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-bg px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-dark">
            Reports & Analytics
          </h1>
          <p className="text-muted mt-2">
            Generated system reports and performance metrics
          </p>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.length === 0 && (
            <p className="text-muted">No reports generated yet.</p>
          )}

          {reports.map((report) => (
            <div
              key={report._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Title */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-primary">
                  {report.title}
                </h2>
                <span className="text-sm text-muted">
                  {new Date(report.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Date Range */}
              <p className="text-sm text-muted mb-4">
                From{" "}
                <strong>{new Date(report.dateFrom).toLocaleDateString()}</strong>
                {" "}to{" "}
                <strong>{new Date(report.dateTo).toLocaleDateString()}</strong>
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <Metric label="Total Alumni" value={report.metrics.totalAlumni} />
                <Metric label="Total Events" value={report.metrics.totalEvents} />
                <Metric label="Total Jobs" value={report.metrics.totalJobs} />
                <Metric
                  label="Engagement Rate"
                  value={`${report.metrics.engagementRate}%`}
                />
              </div>

              {/* Notes */}
              {report.notes && (
                <p className="text-muted text-sm border-t pt-3">
                  <strong>Notes:</strong> {report.notes}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* Reusable Metric Card */
function Metric({ label, value }) {
  return (
    <div className="bg-bg p-4 rounded-lg text-center">
      <p className="text-sm text-muted">{label}</p>
      <p className="text-2xl font-bold text-dark mt-1">
        {value}
      </p>
    </div>
  );
}
