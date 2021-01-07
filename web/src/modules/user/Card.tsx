import { makeStyles } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import React from "react"
import SOCard from "src/components/display/Card"
import UserBasicInfo from "./BasicInfo"
import Button from 'components/general/Button';
import { AssignmentInd, EmojiPeople } from "@material-ui/icons"
import { Link } from "gatsby-theme-material-ui"

interface UserCardProps {
  user: IUser;
}

const useStyles = makeStyles((theme) => ({
  basicInfoWrapper: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      position: 'absolute',
      top: -80,
      right: -100,
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginBottom: theme.spacing(4),
    },
  },
  userCard: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      paddingRight: 80,
    },
  }
}))

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { basicInfoWrapper, userCard } = useStyles();

  return (
    <Box position='relative'>
      <Box className={basicInfoWrapper}>
        <UserBasicInfo user={user} />
      </Box>
      <SOCard
        info={{
          title: user.name,
          subTitle: `${user.description_short} | ${user.seniority_level}`,
          description: user.description
        }}
        actions={(
          <Box display="flex" justifyContent="space-between">
            {
              user.cv_url && (
                <Box mr={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={user.cv_url}
                    startIcon={<AssignmentInd />}>
                    {'Check CV'}
                  </Button>
                </Box>
              )
            }
            <Link to={`/${user.user_name}`}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EmojiPeople />}>
                {'See Profile'}
              </Button>
            </Link>
          </Box>
        )}
        className={userCard}
      />
    </Box>
  )
}

export default UserCard
