import Link from "next/link";
import AppLayout from "../../components/AppLayout";

export default function Timeline({ userName }) {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
}

// Este va a empezar a ser deprecado, porque vienen otros dos nuevos
// Nos permite hacer un fetch de datos, y se lo pasa como props a este componente
// Solo funciona en componentes de tipo pagina (en /pages)
// Se ejecuta en el SERVER (server side rendering) si entro de una
// Pero como es una SPA, se ejecuta en el CLIENTE
Timeline.getInitialProps = () => {
  return fetch("./api/hello")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};
