import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showCabinForm, isShowCabinForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => isShowCabinForm((show) => !show)}>
          {showCabinForm ? "Hide" : "Show"} cabin form
        </Button>

        {showCabinForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
