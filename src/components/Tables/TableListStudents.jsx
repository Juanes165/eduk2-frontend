import React, { useState, useEffect } from 'react';
import { TableHead, TableRow, TableHeader, TableBody, Table, TableCell } from "@/components/ui/table"
import { getGradesService, getAlumnsService } from "@/services"
import { DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { addPointsService } from '@/services';

const TableListStudents = () => {

  const [students, setStudents] = useState([]);
  const [originalStudents, setOriginalStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAscending, setIsAscending] = useState(true);
  const [grades, setGrades] = useState([]);
  const [points, setPoints] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    getGradesService()
      .then((response) => {
        setGrades(response);
      })
  }, [])

  useEffect(() => {
    getAlumnsService()
      .then((response) => {
        setStudents(response);
        setOriginalStudents(response);
      })
  }, []);

  const resetStudents = () => {
    setStudents([...originalStudents]);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredStudents = originalStudents.filter((student) =>
      student.name.toLowerCase().includes(value.toLowerCase())
    );
    setStudents(filteredStudents);
    setCurrentPage(1);
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
        student.grade.toLowerCase().includes(value.toLowerCase())
      );
      setStudents(filteredStudents);
    }
    setCurrentPage(1);
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
    addPointsService(
      { id: selectedStudent.id,
        points: parseInt(points)
      }
    ).then(() => {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === selectedStudent.id
            ? { ...student, points: parseInt(points) }
            : student
        )
      );
      setPoints(0);
      handleCloseDialog();
    });
  };

  // Pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedStudents = students.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const totalPages = Math.ceil(students.length / rowsPerPage);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <input
            className="w-full max-w-[200px] bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
            placeholder="Buscar Estudiante... "
            type="search"
            onChange={handleSearch}
          />
          <button
            className="bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 w-80 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800"
            size="sm"
            variant="outline"
            onClick={handleSortByName}
          >
            Ordenar {isAscending ? '↑' : '↓'}
          </button>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFilterByClass}
            value={grades[0] || "Clase"}
          >
            <option>Clase</option>
            {grades.map((clase, index) => (
              <option key={index} value={clase}>{clase}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse border border-gray-300 dark:border-gray-800">
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Nombre</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Clase</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Email</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2">Puntos</TableHead>
              <TableHead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 px-4 py-2 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedStudents.map(student => (
              <TableRow key={student.email}>
                <TableCell className="border-b dark:border-gray-700 px-4 py-2">{student.name}</TableCell>
                <TableCell className="border-b dark:border-gray-700 px-4 py-2">{student.grade}</TableCell>
                <TableCell className="border-b dark:border-gray-700 px-4 py-2">{student.email}</TableCell>
                <TableCell className="border-b dark:border-gray-700 px-4 py-2">{student.points}</TableCell>
                <TableCell className="border-b dark:border-gray-700 px-4 py-2 text-right">
                  <button className="mr-2" size="sm" variant="outline" onClick={() => handleOpenDialog(student)}>Editar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            className={`px-3 py-1 border rounded-md mx-1 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md mx-1 ${currentPage === index + 1 ? 'bg-grape text-white' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 border rounded-md mx-1 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
      {selectedStudent && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-[425px] bg-white border-gray-300 rounded-md shadow-md dark:border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">Editar</DialogTitle>
              <DialogDescription>Actualiza la información</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Nombre</label>
                <input
                  className="col-span-3 bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800 dark:text-black"
                  id="name"
                  disabled
                  value={selectedStudent.name}
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <label className="text-right font-medium text-gray-700 dark:text-gray-300" htmlFor="status">Puntos</label>
                <input
                  className="col-span-3 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amethyst focus:border-amethyst dark:border-gray-800"
                  id="status"
                  placeholder={selectedStudent.points}
                  onChange={(e) => setPoints(e.target.value)}
                  value={points}
                />
              </div>
            </div>
            <DialogFooter>
              <button className="mr-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800" variant="outline" onClick={handleCloseDialog}>Cancel</button>
              <button className="bg-amethyst hover:bg-grape text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="submit" onClick={handleSave}>Save</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TableListStudents;
