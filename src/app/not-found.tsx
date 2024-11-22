import { Navbar } from "@/components/Navbar/navbar";

export default function NotFound() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <center style={{ color: "black" }}>
          404: oops site cannot be found
        </center>
      </div>
    </div>
  );
}
