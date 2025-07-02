import React from 'react';
import AdminLayout from '../../Admin/AdminLayout';
import CoursesTable from '../../Admin/CoursesTable';

const CoursesPage = () => {
  return (
    <AdminLayout>
      <CoursesTable />
    </AdminLayout>
  );
};

export default CoursesPage;