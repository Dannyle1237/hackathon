import styled from "styled-components";

const Boat = styled.div`
  position: absolute;
  background-color: red;
  height: $((props) => props.size)px;
  width: $((props) => props.size)px;
  top: $((props) => props.size)px;
  border-radius: 50%;
`;
export default Boat;