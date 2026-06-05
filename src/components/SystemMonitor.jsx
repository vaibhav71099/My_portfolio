import { useState, useEffect } from "react";

const SystemMonitor = () => {
  const [uptime, setUptime] = useState({ days: 24, hours: 18, mins: 32, secs: 45 });
  const [systemStats, setSystemStats] = useState({
    cpu: 1.8,
    memoryUsed: 312,
    memoryMax: 1024,
    latency: 18,
    activeThreads: 4
  });

  // Uptime ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs += 1;
        if (secs >= 60) {
          secs = 0;
          mins += 1;
        }
        if (mins >= 60) {
          mins = 0;
          hours += 1;
        }
        if (hours >= 24) {
          hours = 0;
          days += 1;
        }
        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // System stats fluctuation
  useEffect(() => {
    const statsTimer = setInterval(() => {
      setSystemStats((prev) => {
        const cpuChange = (Math.random() - 0.5) * 0.8;
        const memoryChange = Math.floor((Math.random() - 0.5) * 8);
        const latencyChange = Math.floor((Math.random() - 0.5) * 4);
        
        return {
          cpu: Math.max(0.8, Math.min(8.5, parseFloat((prev.cpu + cpuChange).toFixed(1)))),
          memoryUsed: Math.max(280, Math.min(480, prev.memoryUsed + memoryChange)),
          memoryMax: 1024,
          latency: Math.max(12, Math.min(32, prev.latency + latencyChange)),
          activeThreads: Math.random() > 0.85 ? Math.floor(Math.random() * 3) + 3 : prev.activeThreads
        };
      });
    }, 2000);

    return () => clearInterval(statsTimer);
  }, []);

  const formatNum = (n) => String(n).padStart(2, "0");

  const memPercentage = ((systemStats.memoryUsed / systemStats.memoryMax) * 100).toFixed(1);

  return (
    <div className="system-monitor-card mt-4 p-4 scroll-reveal">
      <div className="monitor-header d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <span className="status-dot pulsing" aria-hidden="true" />
          <h4 className="monitor-title h6 fw-bold text-accent mb-0 uppercase tracking-wider">
            Spring Boot Microservice Engine
          </h4>
        </div>
        <span className="system-badge">v3.4.2 — RELEASE</span>
      </div>

      <div className="row g-3">
        {/* Stat 1: Uptime */}
        <div className="col-sm-6 col-md-3">
          <div className="stat-box p-3 h-100">
            <span className="stat-label d-block text-muted-soft mb-1">SYSTEM UPTIME</span>
            <span className="stat-value font-mono text-cyan">
              {uptime.days}d {formatNum(uptime.hours)}h {formatNum(uptime.mins)}m {formatNum(uptime.secs)}s
            </span>
          </div>
        </div>

        {/* Stat 2: CPU */}
        <div className="col-sm-6 col-md-3">
          <div className="stat-box p-3 h-100">
            <span className="stat-label d-block text-muted-soft mb-1">JVM CPU USAGE</span>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="stat-value font-mono text-green">{systemStats.cpu}%</span>
            </div>
            <div className="progress-bar-container" style={{ height: "4px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "2px" }}>
              <div 
                className="progress-bar-fill bg-green" 
                style={{ 
                  height: "100%", 
                  width: `${(systemStats.cpu / 10) * 100}%`, 
                  borderRadius: "2px",
                  transition: "width 1s ease" 
                }} 
              />
            </div>
          </div>
        </div>

        {/* Stat 3: Heap Memory */}
        <div className="col-sm-6 col-md-3">
          <div className="stat-box p-3 h-100">
            <span className="stat-label d-block text-muted-soft mb-1">HEAP ALLOCATION</span>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="stat-value font-mono text-blue">{systemStats.memoryUsed}MB</span>
              <span className="stat-pct font-mono text-muted-soft text-xs">{memPercentage}%</span>
            </div>
            <div className="progress-bar-container" style={{ height: "4px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "2px" }}>
              <div 
                className="progress-bar-fill bg-blue" 
                style={{ 
                  height: "100%", 
                  width: `${memPercentage}%`, 
                  borderRadius: "2px",
                  transition: "width 1s ease" 
                }} 
              />
            </div>
          </div>
        </div>

        {/* Stat 4: REST API Latency */}
        <div className="col-sm-6 col-md-3">
          <div className="stat-box p-3 h-100">
            <span className="stat-label d-block text-muted-soft mb-1">API AVG LATENCY</span>
            <span className="stat-value font-mono text-purple">{systemStats.latency}ms</span>
            <span className="threads-indicator d-block text-xs text-muted-soft mt-1">
              Active JVM Threads: <span className="text-accent">{systemStats.activeThreads}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;
