const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock menu data with role-based access control
const menuData = {
  menus: [
    {
      id: 'claims',
      name: "claims",
      label: "Claims",
      class: 'claims-menu',
      submenus: [
        { label: "Production Report", link: "/businessOperation/claims/productionReport" },
        { label: "Pending Claims-New", link: "/businessOperation/claims/pendingClaimsNew" },
        { label: "Pending Claims-Adjusted", link: "/businessOperation/claims/pendingClaimsAdjusted" },
        { label: "Finalized Claims", link: "/businessOperation/claims/finalizedClaims" }
      ]
    },
    {
      id: 'enrollment',
      name: "enrollment",
      label: "Enrollment",
      class: 'enrollment-menu',
      submenus: [
        { label: "Enrollment Aging", link: "/businessOperation/enrollment/enrollmentAging" },
        { label: "ID Card Aging", link: "/businessOperation/enrollment/idCardAging" },
        { label: "ID Card Status", link: "/businessOperation/enrollment/idCardStatus" },
        { label: "TAT-Enrollments", link: "/businessOperation/enrollment/tatEnrollments" }
      ]
    },
    {
      id: 'callCenter',
      name: 'callCenter',
      label: 'Call Center',
      class: 'callcenter-menu',
      submenus: [
        { label: 'Overall SLA', link: '/businessOperation/callCenter/overallSLA'},
        { label: 'Team Details', link: '../teamDetails'}
      ]
     }
  ],
  roles: {
    claims: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager', 'BPaas Leads', 'BPaas Claims Analyst'],
    enrollment: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager', 'BPaas Leads', 'BPaas Enrollment Analyst'],
    callCenter: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager'] 

  }
};

// API endpoint to get menu data
app.get('/api/menu-data', (req, res) => {
  res.json(menuData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
