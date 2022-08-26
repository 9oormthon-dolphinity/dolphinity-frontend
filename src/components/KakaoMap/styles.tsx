import styled from "@emotion/styled";
import { Modal } from "@mantine/core";

export const MapContainer = styled.div`
  margin: 6px 12px 0 12px;
  height: 600px;
  position: relative;
  padding: 0 40px;
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
  width: 100%;
  heignt: 70px;
  position: relative;
`;

export const ModalContents = styled.div`
  margin: 12px 8px 0 8px;
  padding-bottom: 8px;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.deepBlue[0]};
`;

export const ModalAddress = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.deepBlue[0]};
  font-weight: 500;
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
  font-size: 12px;
  padding: 5px;
  margin-top: 18px;
  border-radius: 12px;
  color: white;
  border: none;
`;
