import React, { useState, useEffect } from 'react';

import { TableHead, TableRow, TableHeader, TableBody, Table, TableCell } from "@/components/ui/table"
import { DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"

const TableListStudents = () => {

  const initialStudents = [
    { id: 1, name: 'Juan Perez', class: 'Grade 9', email: 'juan.perez@example.com', phone: '123-456-7890', status: 'Burned' },
    { id: 2, name: 'Maria Lopez', class: 'Grade 10', email: 'maria.lopez@example.com', phone: '123-456-7891', status: 'Burned' },
    { id: 3, name: 'Carlos Sanchez', class: 'Grade 11', email: 'carlos.sanchez@example.com', phone: '123-456-7892', status: 'Burned' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [originalStudents, setOriginalStudents] = useState(initialStudents);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const resetStudents = () => {
    setStudents([...originalStudents]);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredStudents = originalStudents.filter((student) =>
      student.name.toLowerCase().includes(value.toLowerCase())
    );
    setStudents(filteredStudents);
    if (!value) {
      resetStudents();
    }
  };

  const handleFilterByClass = (e) => {
    const { value } = e.target;
    if (value === "Clase") {
      resetStudents();
    } else {
      const filteredStudents = originalStudents.filter((student) =>
        student.class.toLowerCase().includes(value.toLowerCase())
      );
      setStudents(filteredStudents);
    }
  };

  const handleSortByName = () => {
    const sortedStudents = [...students].sort((a, b) => {
      if (isAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setStudents(sortedStudents);
    setIsAscending(!isAscending);
  };

  const handleOpenDialog = (student) => {
    setSelectedStudent(student);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedStudent(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSelectedStudent((prevStudent) => ({
      ...prevStudent,
      [id]: value,
    }));
  };

  const handleSave = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === selectedStudent.id ? selectedStudent : student
      )
    );
    handleCloseDialog();
  };


  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <input
            className="w-full max-w-[200px] bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
            placeholder="Search students..."
            type="search"
            onChange={handleSearch}
          />
          <button
            className="bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800 w-60"
            size="sm"
            variant="outline"
            onClick={handleSortByName}
          >
            Ordenar {isAscending ? '↑' : '↓'}
          </button>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFilterByClass}
          >
            <option selected>Clase</option>
            {["Grade 9", "Grade 10", "Grade 11"].map((clase) => (
              <option key={clase} value={clase}>{clase}</option>
            ))}
          </select>

        </div>
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse border     border-gray-300 dark:border-gray-800">
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Nombre</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Clase</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Email</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Telefono</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Puntos</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id}>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2">{student.name}</TableCell>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2">{student.class}</TableCell>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2">{student.email}</TableCell>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2">{student.phone}</TableCell>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2">{student.status}</TableCell>
                <TableCell className="border-b     dark:border-gray-700 px-4 py-2 text-right">
                  <button className="mr-2" size="sm" variant="outline" onClick={() => handleOpenDialog(student)}>Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedStudent && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-[425px] bg-white border-gray-300  rounded-md shadow-md dark:border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">Editar</DialogTitle>
              <DialogDescription>Actualiza la informacion</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Nombre</label>
                <input
                  className="col-span-3 bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
                  id="name"
                  disabled
                  value={selectedStudent.name}
                  onChange={handleInputChange}
                />
              </div>
              {/* 
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="class">Clase</label>
                <input
                  className="col-span-3 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
                  id="class"
                  disabled
                  value={selectedStudent.class}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                <input
                  className="col-span-3 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
                  id="email"
                  disabled
                  value={selectedStudent.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="phone">Telefono</label>
                <input
                  className="col-span-3 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
                  id="phone"
                  disabled
                  value={selectedStudent.phone}
                  onChange={handleInputChange}
                />
              </div> */}
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="status">Puntos</label>
                <input
                  className="col-span-3 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
                  id="status"
                  value={selectedStudent.status}
                  onChange={handleInputChange}
                />
              </div>

            </div>
            <DialogFooter>
              <button className="mr-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800" variant="outline" onClick={handleCloseDialog}>Cancel</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="submit" onClick={handleSave}>Save</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TableListStudents;
