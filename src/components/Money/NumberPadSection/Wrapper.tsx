import styled from 'styled-components';

const Wrapper = styled.section`
  background: white;
  > .output {
     box-shadow: inset 0 -3px 3px -3px rgba(0,0,0,0.25),
      inset 0 3px 3px -3px rgba(0,0,0,0.25);
      font-family: Consolas, monospace;
      font-size: 36px;
      text-align: right;
      padding: 8px 16px;
      height: 64px;
      position: relative;
      > .symbol {
        position: absolute;
        left: 16px;
        top: 6px;
        color: rgba(255, 153, 0, 0.2);
      }
     }
  > .pad {
      > button {
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;
        &.ok {
          height: 128px;
          float: right;
        }
        &.zero {
          width: 50%;
        }
        &:nth-child(1) {
          background: #f3f3f3;
        }
        &:nth-child(2), &:nth-child(5) {
          background: #E0E0E0;
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: #D3D3D3
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: #C1C1C1
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: #B8B8B8
        }

        &:nth-child(14) {
          background: #A9A9A9
        }

        &:nth-child(12) {
          background: rgb(255, 153, 0);
          color: white;
        }
        }
       }
`;
export {Wrapper};