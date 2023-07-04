import styled from 'styled-components'
import { ImBlocked } from "react-icons/im"; 
import { RiMailSendLine } from "react-icons/ri";
import { Colors } from '../utils/Colors';
import { darken } from 'polished';
import { FiEdit } from "react-icons/fi";

export const IconBlocked = styled(ImBlocked)`
   font-size: 1.5rem;
   margin-right: 1rem;
   cursor: pointer;
   color:${Colors.primareyColor};

   & :hover{
      color: ${darken(0.2, Colors.primareyColor)};
   }
`;

export const IconEdit = styled(FiEdit)`
   font-size: 1.5rem;
   cursor: pointer;
   color:${Colors.primareyColor};

   & :hover{
      color: ${darken(0.2, Colors.primareyColor)};
   }
`;

export const IconSend = styled(RiMailSendLine)`
   font-size: 1.5rem;
   margin-right: 1rem;
   cursor: pointer;
   color:${Colors.primareyColor};

   & :hover{
      color: ${darken(0.2, Colors.primareyColor)};
   }
`;