import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Text } from "@chakra-ui/react";

interface props {
  children: ReactNode;
}

const CompleteBoard = (props: props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "done",
  });
  const style = {
    color: isOver ? "white" : "green",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Text fontSize="4xl" as="b">
        Done
      </Text>
      {props.children}
    </div>
  );
};

export default CompleteBoard;
