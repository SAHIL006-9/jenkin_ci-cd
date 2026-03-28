/* ─── Data ─── */

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue (₹)',
    data: [1840000, 2100000, 1950000, 2430000, 2210000, 2481500],
    borderColor: '#111827',
    backgroundColor: 'rgba(17,24,39,0.07)',
    borderWidth: 2.5,
    fill: true,
    tension: 0.42,
    pointBackgroundColor: '#111827',
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
};

const ordersData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Orders',
    data: [920, 1050, 980, 1180, 1100, 1284],
    borderColor: '#3b82f6',
    backgroundColor: 'rgba(59,130,246,0.08)',
    borderWidth: 2.5,
    fill: true,
    tension: 0.42,
    pointBackgroundColor: '#3b82f6',
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
};

const donutCategories = [
  { label: 'Software',   value: 38, color: '#111827' },
  { label: 'Hardware',   value: 27, color: '#3b82f6' },
  { label: 'Services',   value: 21, color: '#10b981' },
  { label: 'Consulting', value: 14, color: '#f59e0b' },
];

const transactions = [
  { client: 'Reliance Tech',   initials: 'RT', color: '#3b82f6', product: 'Cloud Suite Pro',  amount: '₹1,24,000', date: '28 Mar 2026', status: 'paid' },
  { client: 'Wipro Ltd',       initials: 'WL', color: '#10b981', product: 'DevOps Starter',   amount: '₹88,500',   date: '27 Mar 2026', status: 'paid' },
  { client: 'Infosys BPO',     initials: 'IB', color: '#8b5cf6', product: 'Security Module',  amount: '₹2,10,000', date: '26 Mar 2026', status: 'pending' },
  { client: 'HCL Systems',     initials: 'HS', color: '#f59e0b', product: 'Analytics Pack',   amount: '₹76,300',   date: '25 Mar 2026', status: 'paid' },
  { client: 'TCS Ventures',    initials: 'TV', color: '#ef4444', product: 'Enterprise License',amount: '₹3,50,000', date: '24 Mar 2026', status: 'failed' },
  { client: 'Tata Digital',    initials: 'TD', color: '#0ea5e9', product: 'Cloud Suite Basic', amount: '₹55,000',   date: '23 Mar 2026', status: 'paid' },
];

const products = [
  { name: 'Cloud Suite Pro',    units: '412 units', revenue: '₹8,24,000', pct: 92, color: '#111827', icon: '☁️',  bg: '#f3f4f6' },
  { name: 'DevOps Starter',     units: '287 units', revenue: '₹5,10,650', pct: 71, color: '#3b82f6', icon: '⚙️',  bg: '#eff6ff' },
  { name: 'Security Module',    units: '201 units', revenue: '₹4,22,100', pct: 58, color: '#10b981', icon: '🔐',  bg: '#ecfdf5' },
  { name: 'Analytics Pack',     units: '189 units', revenue: '₹3,78,000', pct: 49, color: '#f59e0b', icon: '📊',  bg: '#fffbeb' },
  { name: 'Enterprise License', units: '95 units',  revenue: '₹2,46,750', pct: 31, color: '#8b5cf6', icon: '🏢',  bg: '#f5f3ff' },
];

/* ─── Animate KPI cards on load ─── */
function animateKPIs() {
  document.querySelectorAll('.kpi-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), 80 + i * 100);
  });
}

/* ─── Intersection Observer for chart/table cards ─── */
function setupObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.chart-card, .table-card, .products-card').forEach(el => obs.observe(el));
}

/* ─── Line Chart ─── */
let lineChart;
function buildLineChart(dataset) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  if (lineChart) lineChart.destroy();
  lineChart = new Chart(ctx, {
    type: 'line',
    data: dataset,
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111827',
          titleColor: '#fff',
          bodyColor: '#d1d5db',
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              return dataset === revenueData
                ? ' ₹' + v.toLocaleString('en-IN')
                : ' ' + v.toLocaleString() + ' orders';
            }
          }
        }
      },
      scales: {
        x: { grid: { color: '#f3f4f6' }, ticks: { color: '#9ca3af', font: { family: 'DM Sans', size: 11 } } },
        y: {
          grid: { color: '#f3f4f6' },
          ticks: {
            color: '#9ca3af',
            font: { family: 'DM Sans', size: 11 },
            callback: v => dataset === revenueData ? '₹' + (v / 100000).toFixed(1) + 'L' : v
          }
        }
      }
    }
  });
}

function switchChart(btn, type) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  buildLineChart(type === 'revenue' ? revenueData : ordersData);
}

/* ─── Donut Chart ─── */
function buildDonutChart() {
  const ctx = document.getElementById('donutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: donutCategories.map(d => d.label),
      datasets: [{
        data: donutCategories.map(d => d.value),
        backgroundColor: donutCategories.map(d => d.color),
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      cutout: '70%',
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111827',
          titleColor: '#fff',
          bodyColor: '#d1d5db',
          padding: 10,
          cornerRadius: 10,
          callbacks: { label: ctx => `  ${ctx.label}: ${ctx.parsed}%` }
        }
      }
    }
  });

  const legend = document.getElementById('donutLegend');
  donutCategories.forEach(d => {
    legend.innerHTML += `
      <div class="legend-item">
        <div class="legend-left">
          <div class="legend-dot" style="background:${d.color}"></div>
          <span>${d.label}</span>
        </div>
        <span class="legend-pct">${d.value}%</span>
      </div>`;
  });
}

/* ─── Transactions Table ─── */
function buildTransactions() {
  const tbody = document.getElementById('transactionTableBody');
  transactions.forEach(t => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="client-cell">
            <div class="client-avatar" style="background:${t.color}">${t.initials}</div>
            <span class="client-name">${t.client}</span>
          </div>
        </td>
        <td style="color:var(--text-sec)">${t.product}</td>
        <td style="font-weight:600">${t.amount}</td>
        <td style="color:var(--text-mute)">${t.date}</td>
        <td><span class="status-badge ${t.status}">${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span></td>
      </tr>`;
  });
}

/* ─── Product List ─── */
function buildProducts() {
  const list = document.getElementById('productList');
  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <div class="product-icon" style="background:${p.bg}">${p.icon}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-units">${p.units}</div>
        <div class="product-bar-wrap" style="margin-top:6px">
          <div class="product-bar-bg">
            <div class="product-bar-fill" style="width:0%;background:${p.color}" data-pct="${p.pct}"></div>
          </div>
        </div>
      </div>
      <div class="product-revenue">${p.revenue}</div>`;
    list.appendChild(item);
  });

  // Animate bars after a small delay
  setTimeout(() => {
    document.querySelectorAll('.product-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 600);
}

/* ─── Sidebar active nav ─── */
function setupNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  animateKPIs();
  setupObserver();
  buildLineChart(revenueData);
  buildDonutChart();
  buildTransactions();
  buildProducts();
  setupNav();
});
