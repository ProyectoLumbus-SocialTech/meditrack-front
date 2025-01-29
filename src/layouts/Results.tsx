import React, { useState } from 'react';

const data = [
    {
        historiaClinica: 'HC001',
        apellidoNombre: 'Gomez, Juan',
        edad: 30,
        sexo: 'Masculino',
        detalles: [
            {
                codigo: 'S001',
                servicio: 'Biopsia',
                fIngreso: '2024-01-01',
                fResultado: '2024-01-05',
                tEntrega: 4,
                condicion: 'Normal',
                medico: 'Dr. Perez',
                dxTopo: 'Benigno',
                dxMorf: 'Sin alteraciones',
                laminas: [
                    {
                        cantidad: 10,
                        fAsignacion: '2024-01-06',
                        fSalida: '2024-01-10',
                        fIngreso: '2024-01-01',
                        observaciones: 'Ninguna'
                    }
                ]
            }
        ]
    },
    {
        historiaClinica: 'HC002',
        apellidoNombre: 'Martinez, Ana',
        edad: 45,
        sexo: 'Femenino',
        detalles: [
            {
                codigo: 'S002',
                servicio: 'Citología',
                fIngreso: '2024-02-01',
                fResultado: '2024-02-04',
                tEntrega: 3,
                condicion: 'Normal',
                medico: 'Dr. Garcia',
                dxTopo: 'Maligno',
                dxMorf: 'Alteraciones detectadas',
                laminas: [
                    {
                        cantidad: 8,
                        fAsignacion: '2024-02-05',
                        fSalida: '2024-02-08',
                        fIngreso: '2024-02-01',
                        observaciones: 'Requiere análisis más detallado'
                    }
                ]
            },
            {
                codigo: 'S003',
                servicio: 'Citología',
                fIngreso: '2024-02-10',
                fResultado: '2024-02-13',
                tEntrega: 2,
                condicion: 'Normal',
                medico: 'Dr. Lopez',
                dxTopo: 'Benigno',
                dxMorf: 'Sin alteraciones significativas',
                laminas: [
                    {
                        cantidad: 4,
                        fAsignacion: '2024-02-11',
                        fSalida: '2024-02-14',
                        fIngreso: '2024-02-10',
                        observaciones: 'Requiere seguimiento periódico'
                    }
                ]
            },
            {
                codigo: 'S004',
                servicio: 'Citología',
                fIngreso: '2024-02-15',
                fResultado: '2024-02-18',
                tEntrega: 1,
                condicion: 'Normal',
                medico: 'Dr. Perez',
                dxTopo: 'Normal',
                dxMorf: 'Células en rango normal',
                laminas: [
                    {
                        cantidad: 6,
                        fAsignacion: '2024-02-16',
                        fSalida: '2024-02-19',
                        fIngreso: '2024-02-15',
                        observaciones: 'No se requieren acciones adicionales'
                    }
                ]
            }
        ]
    }
    
];

const Results: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [nestedExpanded, setNestedExpanded] = useState<number | null>(null); 

    const handleExpand = (index: number) => {
        setExpanded(expanded === index ? null : index); 
    };

    const handleNestedExpand = (index: number) => {
        setNestedExpanded(nestedExpanded === index ? null : index); 
    };

    const handleEdit = (index: number) => {
        console.log('Edit', index);
    };

    return (
            <div className="bg-white p-4 rounded-lg">
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Historia Clínica</th>
                            <th className="px-4 py-2 text-left">Apellidos y Nombres</th>
                            <th className="px-4 py-2 text-left">Edad</th>
                            <th className="px-4 py-2 text-left">Sexo</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className="px-4 py-2 text-left" data-label="Historia Clínica:">{row.historiaClinica}</td>
                                    <td className="px-4 py-2 text-left" data-label="Apellidos y Nombres:">{row.apellidoNombre}</td>
                                    <td className="px-4 py-2 text-left" data-label="Edad:">{row.edad}</td>
                                    <td className="px-4 py-2 text-left" data-label="Sexo:">{row.sexo}</td>
                                    <td className="px-4 py-2 cursor-pointer">
                                        <i
                                            className="fa fa-chevron-down text-xl"
                                            onClick={() => handleExpand(index)}
                                        ></i>
                                    </td>
                                </tr>

                                {/* Detalles de la fila principal (expandidos dentro de la misma fila) */}
                                {expanded === index && (
                                    <tr>
                                        <td colSpan={5} className="py-2 px-2 bg-[#EAF5FF]">
                                            <table className="w-full table-auto text-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-2 text-left">Código</th>
                                                        <th className="px-4 py-2 text-left">Servicio</th>
                                                        <th className="px-4 py-2 text-left">F. Ingreso</th>
                                                        <th className="px-4 py-2 text-left">F. Resultado</th>
                                                        <th className="px-4 py-2 text-left">T. Entrega (días)</th>
                                                        <th className="px-4 py-2 text-left">Condición</th>
                                                        <th className="px-4 py-2 text-left">Médico</th>
                                                        <th className="px-4 py-2 text-left">Dx. Topo.</th>
                                                        <th className="px-4 py-2 text-left">Dx. Morf.</th>
                                                        <th className="px-4 py-2"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {row.detalles.map((detalle, idx) => (
                                                        <React.Fragment key={idx}>
                                                            <tr>
                                                                <td className="px-4 py-2 text-left" data-label="Código:">{detalle.codigo}</td>
                                                                <td className="px-4 py-2 text-left" data-label="Servicio:">{detalle.servicio}</td>
                                                                <td className="px-4 py-2 text-left" data-label="F. Ingreso:">{detalle.fIngreso}</td>
                                                                <td className="px-4 py-2 text-left" data-label="F. Resultado:">{detalle.fResultado}</td>
                                                                <td className="px-4 py-2 text-left" data-label="T. Entrega:">{detalle.tEntrega}</td>
                                                                <td className="px-4 py-2 text-left" data-label="Condición:">{detalle.condicion}</td>
                                                                <td className="px-4 py-2 text-left" data-label="Médico:">{detalle.medico}</td>
                                                                <td className="px-4 py-2 text-left" data-label="Dx. Topo.:">{detalle.dxTopo}</td>
                                                                <td className="px-4 py-2 text-left" data-label="Dx. Morf.:">{detalle.dxMorf}</td>
                                                                <td className="px-4 py-2 cursor-pointer">
                                                                    <i
                                                                        className="fa fa-edit text-xl"
                                                                        onClick={() => handleEdit(idx)}
                                                                    ></i>
                                                                </td>
                                                                <td className="px-4 py-2 cursor-pointer">
                                                                    <i
                                                                        className="fa fa-chevron-down text-xl"
                                                                        onClick={() => handleNestedExpand(idx)}
                                                                    ></i>
                                                                </td>
                                                            </tr>

                                                            {/* Detalles anidados */}
                                                            {nestedExpanded === idx && (
                                                                <tr>
                                                                    <td colSpan={11} className="py-2 bg-[#F3F7FA]">
                                                                        <table className="w-full table-auto text-sm">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="px-4 py-2 text-left text-background-blue">Cant. Láminas</th>
                                                                                    <th className="px-4 py-2 text-left text-background-blue">F. Asignación</th>
                                                                                    <th className="px-4 py-2 text-left text-background-blue">F. Salida</th>
                                                                                    <th className="px-4 py-2 text-left text-background-blue">F. Ingreso</th>
                                                                                    <th className="px-4 py-2 text-left text-background-blue">Observaciones</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {detalle.laminas.map((lamina, lIdx) => (
                                                                                    <tr key={lIdx}>
                                                                                        <td className="px-4 py-2 text-left" data-label="Cant. Láminas:">{lamina.cantidad}</td>
                                                                                        <td className="px-4 py-2 text-left" data-label="F. Asignación:">{lamina.fAsignacion}</td>
                                                                                        <td className="px-4 py-2 text-left" data-label="F. Salida:">{lamina.fSalida}</td>
                                                                                        <td className="px-4 py-2 text-left" data-label="F. Ingreso:">{lamina.fIngreso}</td>
                                                                                        <td className="px-4 py-2 text-left" data-label="Observaciones:">{lamina.observaciones}</td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default Results;
