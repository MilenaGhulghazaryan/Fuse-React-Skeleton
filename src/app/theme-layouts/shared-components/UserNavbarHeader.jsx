import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

const Root = styled('div')(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);

  return (
    <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
      {/* <div className="flex items-center justify-center mb-24">
        <Avatar
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
          }}
          className="avatar text-32 font-bold w-96 h-96"
          src={user.data.photoURL}
          alt={user.data.displayName}
        >
          {user.data.displayName.charAt(0)}
        </Avatar>
      </div> */}
      {/* <Typography className="username text-14 whitespace-nowrap font-medium">
        {user.data.displayName}
      </Typography>
      <Typography className="email text-13 whitespace-nowrap font-medium" color="text.secondary">
        {user.data.email}
      </Typography> */}


      <span style={{
        fontSize: '12px',
        color: 'rgb(206, 230, 229)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        lineHeight: '20px',
        marginRight: ' 59%'
      }} >ԿԱՅՔԻ ՏԵՍՔ</span>
      <h6 style={{
        fontSize: '11px',
        color: 'rgb(156, 163, 175)',
        letterSpacing: '0.06px',
        fontWeight: '500',
        lineHeight: '1.5',
        marginRight: ' 47%'
      }}>Կայքի արտաքին տեսք</h6>
    </Root>
  );
}

export default UserNavbarHeader;