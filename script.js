/* ─── Reset & Base ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:        #f4f5f7;
  --surface:   #ffffff;
  --border:    #e8eaed;
  --text-pri:  #111827;
  --text-sec:  #6b7280;
  --text-mute: #9ca3af;

  --green:     #10b981;
  --green-bg:  #ecfdf5;
  --blue:      #3b82f6;
  --blue-bg:   #eff6ff;
  --amber:     #f59e0b;
  --amber-bg:  #fffbeb;
  --purple:    #8b5cf6;
  --purple-bg: #f5f3ff;
  --red:       #ef4444;
  --red-bg:    #fef2f2;

  --sidebar-w: 230px;
  --radius:    14px;
  --shadow:    0 1px 3px rgba(0,0,0,.07), 0 4px 16px rgba(0,0,0,.05);
}

html, body {
  height: 100%;
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text-pri);
  display: flex;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

/* ─── Sidebar ─── */
.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 28px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
}
.logo-icon {
  width: 34px; height: 34px;
  background: var(--text-pri);
  border-radius: 9px;
  display: grid; place-items: center;
  color: #fff;
  font-size: 14px;
}
.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -.4px;
}

.nav { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.nav-item {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--text-sec);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background .18s, color .18s;
}
.nav-item i { width: 16px; text-align: center; font-size: 13px; }
.nav-item:hover { background: var(--bg); color: var(--text-pri); }
.nav-item.active { background: var(--text-pri); color: #fff; }

.sidebar-footer { padding-top: 20px; border-top: 1px solid var(--border); }
.user-info { display: flex; align-items: center; gap: 10px; padding: 6px 8px; }
.avatar {
  width: 34px; height: 34px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: grid; place-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}
.user-name { font-size: 13px; font-weight: 600; }
.user-role { font-size: 11px; color: var(--text-mute); }

/* ─── Main ─── */
.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  padding: 28px 32px;
  min-height: 100vh;
  overflow-y: auto;
}

/* ─── Topbar ─── */
.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 12px;
}
.page-title {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -.5px;
}
.page-sub { font-size: 13px; color: var(--text-mute); margin-top: 3px; display: block; }

.topbar-right { display: flex; align-items: center; gap: 12px; }
.date-range {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-sec);
  transition: border-color .18s;
}
.date-range:hover { border-color: #c0c4cc; }

.btn-export {
  display: flex; align-items: center; gap: 7px;
  background: var(--text-pri);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 9px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: opacity .18s;
}
.btn-export:hover { opacity: .85; }

.notif {
  position: relative;
  width: 38px; height: 38px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: grid; place-items: center;
  font-size: 14px;
  cursor: pointer;
  color: var(--text-sec);
}
.badge {
  position: absolute;
  top: 5px; right: 5px;
  width: 16px; height: 16px;
  background: var(--red);
  color: #fff;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 700;
  display: grid; place-items: center;
}

/* ─── KPI Grid ─── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}
.kpi-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 22px 18px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .4s ease, transform .4s ease, box-shadow .2s;
}
.kpi-card.visible { opacity: 1; transform: translateY(0); }
.kpi-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,.1); }

.kpi-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.kpi-label { font-size: 12px; font-weight: 600; color: var(--text-sec); text-transform: uppercase; letter-spacing: .5px; }
.kpi-icon {
  width: 34px; height: 34px;
  border-radius: 9px;
  display: grid; place-items: center;
  font-size: 14px;
}
.kpi-icon.green  { background: var(--green-bg);  color: var(--green); }
.kpi-icon.blue   { background: var(--blue-bg);   color: var(--blue); }
.kpi-icon.amber  { background: var(--amber-bg);  color: var(--amber); }
.kpi-icon.purple { background: var(--purple-bg); color: var(--purple); }

.kpi-value {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -.5px;
  margin-bottom: 10px;
}
.kpi-change { font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 5px; }
.kpi-change.up   { color: var(--green); }
.kpi-change.down { color: var(--red); }

/* ─── Charts Row ─── */
.charts-row {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 18px;
  margin-bottom: 24px;
}
.chart-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .45s ease .15s, transform .45s ease .15s;
}
.chart-card.visible { opacity: 1; transform: translateY(0); }

.chart-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}
.chart-title { font-size: 15px; font-weight: 600; }
.chart-sub { font-size: 12px; color: var(--text-mute); margin-top: 3px; }

.chart-tabs { display: flex; gap: 4px; }
.tab {
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  color: var(--text-sec);
  transition: background .18s, color .18s, border-color .18s;
}
.tab.active { background: var(--text-pri); color: #fff; border-color: var(--text-pri); }

.donut-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 18px;
}
.legend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.legend-left { display: flex; align-items: center; gap: 8px; color: var(--text-sec); }
.legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
.legend-pct { font-weight: 600; color: var(--text-pri); }

/* ─── Bottom Row ─── */
.bottom-row {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 18px;
}
.table-card, .products-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .45s ease .25s, transform .45s ease .25s;
}
.table-card.visible, .products-card.visible { opacity: 1; transform: translateY(0); }

.table-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 18px;
}
.view-all { font-size: 12px; color: var(--blue); font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 4px; }
.view-all:hover { text-decoration: underline; }

.data-table { width: 100%; border-collapse: collapse; }
.data-table th {
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-mute);
  text-transform: uppercase;
  letter-spacing: .5px;
  padding: 0 0 12px;
  border-bottom: 1px solid var(--border);
}
.data-table td {
  padding: 13px 0;
  font-size: 13px;
  border-bottom: 1px solid var(--bg);
  vertical-align: middle;
}
.data-table tr:last-child td { border-bottom: none; }

.client-cell { display: flex; align-items: center; gap: 9px; }
.client-avatar {
  width: 28px; height: 28px;
  border-radius: 7px;
  display: grid; place-items: center;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.client-name { font-weight: 500; }

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
}
.status-badge.paid    { background: var(--green-bg);  color: var(--green); }
.status-badge.pending { background: var(--amber-bg);  color: var(--amber); }
.status-badge.failed  { background: var(--red-bg);    color: var(--red); }

/* ─── Product List ─── */
.product-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--bg);
}
.product-item:last-child { border-bottom: none; }
.product-icon {
  width: 38px; height: 38px;
  border-radius: 10px;
  display: grid; place-items: center;
  font-size: 15px;
  flex-shrink: 0;
}
.product-info { flex: 1; min-width: 0; }
.product-name { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.product-units { font-size: 11px; color: var(--text-mute); margin-top: 2px; }
.product-bar-wrap { flex: 1; }
.product-bar-bg { height: 5px; background: var(--bg); border-radius: 99px; overflow: hidden; }
.product-bar-fill { height: 100%; border-radius: 99px; transition: width 1s ease; }
.product-revenue { font-size: 13px; font-weight: 600; white-space: nowrap; margin-left: 8px; }

/* ─── Responsive ─── */
@media (max-width: 1200px) {
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .charts-row { grid-template-columns: 1fr; }
  .bottom-row { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .main { margin-left: 0; padding: 20px 16px; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .topbar-right { gap: 8px; }
  .btn-export span { display: none; }
}
@media (max-width: 480px) {
  .kpi-grid { grid-template-columns: 1fr; }
}
