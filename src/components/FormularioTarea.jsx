import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState,useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(()=>{
  console.log
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    //tareas.push (Es un metodo mutable, y NO SE PUEDE MODIFICAR UN STATE, en cambio si fuera un array normal guardado en cualquier variable si podría hacerlo)
    setTareas([...tareas, tarea])
    setTarea('')
  };
const borrarTarea =(nombreTarea)=>{
let copiaTareas = tareas.filter((itemTarea)=>itemTarea!== nombreTarea);
setTareas(copiaTareas);
}
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
      <ListaTareas tareas ={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
