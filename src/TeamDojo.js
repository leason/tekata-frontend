import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class TeamDojo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        "id": 3,
        "created_on": "2017-12-12 00:16:00",
        "updated_on": "2017-12-12 00:16:00",
        "name": "My First Team",
        "description": "Creating my first team from the api",
        "ownerId": 123,
        "skills": [
            {
                "id": 8,
                "created_on": "2017-12-10 21:55:06",
                "updated_on": "2017-12-10 21:55:06",
                "name": "JavaScript",
                "description": "Popular programming language",
                "created_by_user_id": null,
                "is_shared": 1,
                "is_pending": 0,
                "skill_added_on": "2017-12-15 21:41:03"
            },
            {
                "id": 17,
                "created_on": "2017-12-10 21:55:06",
                "updated_on": "2017-12-10 21:55:06",
                "name": "Go",
                "description": "Popular programming language",
                "created_by_user_id": null,
                "is_shared": 1,
                "is_pending": 0,
                "skill_added_on": "2017-12-15 22:27:52"
            },
            {
                "id": 26,
                "created_on": "2017-12-16 09:45:46",
                "updated_on": "2017-12-16 09:45:46",
                "name": "Our custom backend",
                "description": "Backend in Golang that handles orders",
                "created_by_user_id": null,
                "is_shared": 1,
                "is_pending": 1,
                "skill_added_on": "2017-12-16 09:45:46"
            },
            {
                "id": 27,
                "created_on": "2017-12-16 09:54:39",
                "updated_on": "2017-12-16 09:54:39",
                "name": "Our custom backend",
                "description": "Backend in Golang that handles orders",
                "created_by_user_id": null,
                "is_shared": 1,
                "is_pending": 1,
                "skill_added_on": "2017-12-16 09:54:39"
            }
        ],
        "members": [
            {
                "id": 6,
                "created_on": "2017-12-16 23:29:42",
                "updated_on": "2017-12-16 23:29:42",
                "team_id": 3,
                "user_id": null,
                "label": "Ivana Tinkle"
            }
        ],
        "ranks": [
            {
                "team_id": 3,
                "skill_id": 8,
                "member_id": 6,
                "rank": 2,
                "created_on": "2017-12-16 23:32:35"
            }
        ]
      }
    }
  }

  getRankBySkillAndMember(skillId, memberId) {
    var rank = {};
    for (var i in this.state.data.ranks) {
      rank = this.state.data.ranks[i]
      if (rank.skill_id == skillId && rank.member_id == memberId) {
        return rank;
      }
    }
    return {rank:null};
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>skills</TableCell>
              {this.state.data.members.map(member => {
                return(
                  <TableCell>{member.label}</TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.skills.map(skill => {
              return (
                <TableRow key={skill.id}>
                  <TableCell>{skill.name}</TableCell>
                  {this.state.data.members.map(member => {
                    return(
                      <TableCell>{this.getRankBySkillAndMember(skill.id, member.id).rank}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TeamDojo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default TeamDojo;
