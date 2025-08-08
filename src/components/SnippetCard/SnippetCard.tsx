import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { snippetCardStyles } from './SnippetCard.styles';

export const SnippetCard = () => {
  return (
    <Card sx={snippetCardStyles.card}>
      <CardHeader
        avatar={
          <Avatar>
            <PersonIcon />
          </Avatar>
        }
        title="Mark1234567"
        subheader="JavaScript"
      />
      <CardContent>
        <Typography sx={snippetCardStyles.codeBlock}>
          const user = 123; Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          molestiae officia voluptatem doloremque expedita quo molestias, dolore fugit! Praesentium
          nisi totam consectetur accusantium magnam accusamus delectus! Architecto quia
          reprehenderit aliquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          saepe voluptate libero culpa, laudantium molestiae. Error sequi, harum nam voluptas velit
          eaque ab, quasi deserunt labore doloribus quidem aspernatur laudantium. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Minima ullam labore est vero eveniet modi,
          reiciendis, nemo vel iusto officiis quo illum accusamus deleniti hic quisquam nobis?
          Nihil, rem perspiciatis?
        </Typography>
      </CardContent>
      <CardActions sx={snippetCardStyles.actions}>
        <Box sx={snippetCardStyles.actionGroup}>
          <Box sx={snippetCardStyles.actionItem}>
            <IconButton>
              <ThumbUpOffAltIcon />
            </IconButton>
            <Typography>1</Typography>
          </Box>
          <Box sx={snippetCardStyles.actionItem}>
            <IconButton>
              <ThumbDownOffAltIcon />
            </IconButton>
            <Typography>1</Typography>
          </Box>
        </Box>
        <Box sx={snippetCardStyles.actionGroup}>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <Typography>0</Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
