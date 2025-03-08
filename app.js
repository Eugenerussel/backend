require('dotenv').config(); 
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
      icon: 'bi-file-earmark-text',
      submenus: [
        { label: "Production Report", link: "businessOperation/claims/productionReport" },
        { label: "Pending Claims-New", link: "businessOperation/claims/pendingClaimsNew" },
        { label: "Pending Claims-Adjusted", link: "businessOperation/claims/pendingClaimsAdjusted" },
        { label: "Finalized Claims", link: "businessOperation/claims/finalizedClaims" }
      ],
      roles: {
        claims: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager', 'BPaas Leads', 'BPaas Claims Analyst'],
      }
    },
    {
      id: 'enrollment',
      name: "enrollment",
      label: "Enrollment",
      class: 'enrollment-menu',
      icon: 'bi-person-plus',
      submenus: [
        { label: "Enrollment Aging", link: "businessOperation/enrollment/enrollmentAging" },
        { label: "ID Card Aging", link: "businessOperation/enrollment/idCardAging" },
        { label: "ID Card Status", link: "businessOperation/enrollment/idCardStatus" },
        { label: "TAT-Enrollments", link: "businessOperation/enrollment/tatEnrollments" }
      ],
      roles:{
        enrollment: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager', 'BPaas Leads', 'BPaas Enrollment Analyst'],
      }
    },
    {
      id: 'callCenter',
      name: 'callCenter',
      label: 'Call Center',
      class: 'callcenter-menu',
      icon: 'bi-telephone',
      submenus: [
        { label: 'Overall SLA', link: 'businessOperation/callCenter/overallSLA'},
        { label: 'Team Details', link: 'businessOperation/callCenter/teamDetails'}
      ],
      roles:{
        callCenter: ['Insitz Plus Admin', 'Customer Leadership', 'BPaaS Leadership', 'BPaaS Manager'] 
      }
     }
  ],
};

// API endpoint to get menu data
app.get('/api/menu-data', (req, res) => {
  res.json(menuData);
});
app.get('/api/qliksense-url', (req, res) => {
  const qlikUrl = process.env.QLIK_SENSE_URL;
  res.json({ url: qlikUrl });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
