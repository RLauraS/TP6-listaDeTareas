import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //tareas.push (Es un metodo mutable, y NO SE PUEDE MODIFICAR UN STATE, en cambio si fuera un array normal guardado en cualquier variable si podría hacerlo)
    setTareas([...tareas, tarea])
    setTarea('')
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e)=>setTarea(e.target.value)}
            value={tarea}/>
            
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
