import styled from "@emotion/styled";
import { Modal } from "@mantine/core";

export const MapContainer = styled.div`
  min-width: 400px;
  height: 80vh;
`;

export const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditModal = styled(Modal)`
  .mantine-Modal-modal {
    padding: 0;
    border-radius: 0 0 10px 0;
  }
  .mantine-Modal-body {
    border-radius: 0 0 10px 0;
  }
  .mantine-Modal-header {
    background: green;
    margin: 0;
  }
`;

export const ModalImage = styled.div`
  width: 194px;
  heignt: 134px;
  background-color: red;
`;

export const ModalContents = styled.div`
  margin: 12px 8px 0 8px;
  padding-bottom: 8px;
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const ModalAddress = styled.div`
  font-size: 11px;
`;

export const ModalBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalBottomData = styled.div`
  display: flex;
`;

export const ModalDetailBtn = styled.button`
  background-color: #285ba9;
  font-size: 8px;
  margin-top: 18px;
  border-radius: 10px;
  color: white;
  border: none;
`;
