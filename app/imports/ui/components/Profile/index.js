import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, FormLabel, Button, Tabs, Tab } from 'react-bootstrap';
import { capitalize } from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import Validation from '../validation/validation';
import InputHint from '../inputHint';
import AccountPageFooter from '../accountPageFooter';
import Styles from './styles';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'profile' };
    // this.form = React.createRef();
  }

  getUserType = (user) => (user.oAuthProvider ? 'oauth' : 'password');

  handleDeleteAccount = () => {
    if (confirm('Are you sure? This will permanently delete your account and all of its data.')) {
      // this.props.removeUser();
    }
  };

  handleSubmit = (form) => {
    Meteor.users.allow({
      update: function (userId, doc, fields, modifier) {
        return !!userId;
      }
    });

    try {
      Meteor.users.update({_id: this.props.userId}, {
        $set: {
          email: form.emailAddress.value,
          profile: {
            name: {
              first: form.firstName.value,
              last: form.lastName.value,
            },
            phoneNumber: form.phoneNumber.value,
          }
        }
      });
      Bert.alert('Profile updated!', 'success', 'growl-top-right');
    } catch (exception) {
      throw new Error(`[updateUser] ${exception.message}`);
    }

    if (form.newPassword.value) {
      Accounts.changePassword(form.currentPassword.value, form.newPassword.value, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger', 'growl-top-right');
        } else {
          form.currentPassword.value = ''; // eslint-disable-line no-param-reassign
          form.newPassword.value = ''; // eslint-disable-line no-param-reassign
        }
      });
    }
    // this.props.updateUser({
    //   variables: {
    //     user: {
    //       email: form.emailAddress.value,
    //       profile: {
    //         name: {
    //           first: form.firstName.value,
    //           last: form.lastName.value,
    //         },
    //       },
    //     },
    //   },
    // });

    // if (form.newPassword.value) {
    //   Accounts.changePassword(form.currentPassword.value, form.newPassword.value, (error) => {
    //     if (error) {
    //       Bert.alert(error.reason, 'danger');
    //     } else {
    //       form.currentPassword.value = ''; // eslint-disable-line no-param-reassign
    //       form.newPassword.value = ''; // eslint-disable-line no-param-reassign
    //     }
    //   });
    // }
  };

  renderOAuthUser = (user) => (
    <div className="OAuthProfile">
      <div key={user.oAuthProvider} className={`LoggedInWith ${user.oAuthProvider}`}>
        <img src={`/${user.oAuthProvider}.svg`} alt={user.oAuthProvider} />
        <p>
          {`You're logged in with ${capitalize(user.oAuthProvider)} using the email address ${
            user.emailAddress
          }.`}
        </p>
        <Button
          className={`btn btn-${user.oAuthProvider}`}
          href={
            {
              facebook: 'https://www.facebook.com/settings',
              google: 'https://myaccount.google.com/privacy#personalinfo',
              github: 'https://github.com/settings/profile',
            }[user.oAuthProvider]
          }
          target="_blank"
        >
          Edit Profile on {capitalize(user.oAuthProvider)}
        </Button>
      </div>
    </div>
  );

  renderPasswordUser = (user) => (
    <div>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <input
              type="text"
              name="firstName"
              defaultValue={user.profile.name.first}
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <FormLabel>Last Name</FormLabel>
            <input
              type="text"
              name="lastName"
              defaultValue={user.profile.name.last}
              className="form-control"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <FormLabel>Email Address</FormLabel>
        <input
          type="email"
          name="emailAddress"
          defaultValue={user.emails[0].address}
          className="form-control"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Phone Number</FormLabel>
        <input
          type="text"
          name="phoneNumber"
          defaultValue={user.profile.phoneNumber}
          className="form-control"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Current Password</FormLabel>
        <input type="password" name="currentPassword" className="form-control" />
      </FormGroup>
      <FormGroup>
        <FormLabel>New Password</FormLabel>
        <input type="password" name="newPassword" className="form-control" />
        <InputHint>Use at least six characters.</InputHint>
      </FormGroup>
      <Button type="submit" bsstyle="success">
        Save Profile
      </Button>
    </div>
  );

  // renderProfileForm = (user) =>this.renderPasswordUser(user);
  // renderProfileForm = (user) =>
  //   user &&
  //   {
  //     password: this.renderPasswordUser,
  //     oauth: this.renderOAuthUser,
  //   }[this.getUserType(user)](user);

  render() {
    console.log(this);
    const { currentUser, updateUser } = this.props;
    return currentUser ? (
      <Styles.Profile>
        <h4 className="page-header">
          {currentUser.profile.name ? `${currentUser.profile.name.first} ${currentUser.profile.name.last}` : currentUser.username}
        </h4>
        <Tabs
          animation="false"
          activeKey={this.state.activeTab}
          onSelect={(activeTab) => this.setState({ activeTab })}
          id="admin-user-tabs"
        >
          <Tab eventKey="profile" title="Profile">
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Validation
                  rules={{
                    firstName: {
                      required: true,
                    },
                    lastName: {
                      required: true,
                    },
                    emailAddress: {
                      required: true,
                      email: true,
                    },
                    currentPassword: {
                      required: (form, blah) => {
                        console.log(form, blah);
                        // Only required if newPassword field has a value.
                        return document.querySelector('[name="newPassword"]').value.length > 0;
                      },
                    },
                    newPassword: {
                      required() {
                        // Only required if currentPassword field has a value.
                        return document.querySelector('[name="currentPassword"]').value.length > 0;
                      },
                      minlength: 6,
                    },
                  }}
                  messages={{
                    firstName: {
                      required: "What's your first name?",
                    },
                    lastName: {
                      required: "What's your last name?",
                    },
                    emailAddress: {
                      required: 'Need an email address here.',
                      email: 'Is this email address correct?',
                    },
                    currentPassword: {
                      required: 'Need your current password if changing.',
                    },
                    newPassword: {
                      required: 'Need your new password if changing.',
                    },
                  }}
                  submitHandler={(form) => this.handleSubmit(form)}
                >
                  <form
                    onSubmit={(event) => event.preventDefault()}
                  >
                    {this.renderPasswordUser(currentUser)}
                  </form>
                </Validation>
                <AccountPageFooter>
                  <Button bsstyle="danger" onClick={this.handleDeleteAccount}>
                    Delete My Account
                  </Button>
                </AccountPageFooter>
              </Col>
            </Row>
          </Tab>
          {/* <Tab eventKey="settings" title="Settings">
            <UserSettings settings={data.user.settings} updateUser={updateUser} />
          </Tab> */}
        </Tabs>
      </Styles.Profile>
    ) : (
      <div />
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Profile;
// export default compose(
//   graphql(userQuery),
//   graphql(updateUserMutation, {
//     name: 'updateUser',
//     options: () => ({
//       refetchQueries: [{ query: userQuery }],
//       onCompleted: () => {
//         Bert.alert('Profile updated!', 'success');
//       },
//       onError: (error) => {
//         Bert.alert(error.message, 'danger');
//       },
//     }),
//   }),
//   graphql(removeUserMutation, {
//     name: 'removeUser',
//     options: () => ({
//       onCompleted: () => {
//         Bert.alert('User removed!', 'success');
//       },
//       onError: (error) => {
//         Bert.alert(error.message, 'danger');
//       },
//     }),
//   }),
// )(withApollo(Profile));
