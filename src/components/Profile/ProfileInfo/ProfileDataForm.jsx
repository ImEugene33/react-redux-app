import React from "react";
import { useFormik } from "formik";
import { Button, Switch, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import * as axios from "axios";
import { useEffect, useState, useRef } from "react";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "a1e1af33-ed96-4178-924e-0d18de8ee9bc" },
});

// Подсказка домашнего задания: через useEffect меняем editMode на false, при условии что props.profileUpdateStatus === 'success'

// useEffect(() => {
//   ProfileDataForm();
// }, []);

const ProfileDataForm = ({ profile, toEditMode, saveProfile }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: profile,

    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values));

      return instance.put(`profile/`, values).then(() => {
        actions.resetForm({ values: profile });
        toEditMode();
        actions.setSubmitting(false);
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Button
        variant="contained"
        size="small"
        type="submit"
        endIcon={<SendIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        size="small"
        type="reset"
        startIcon={<DeleteIcon />}
      >
        Clear
      </Button>

      <TextField
        size="small"
        id="fullName"
        name="fullName"
        //   value={formik.values.fullName}
        label={profile.fullName}
        onChange={formik.handleChange}
      />

      <Switch
        onChange={formik.handleChange}
        name="lookingForAJob"
        id="lookingForAJob"
        defaultChecked="true"
      />

      <TextField
        size="small"
        id="aboutMe"
        name="aboutMe"
        label={profile.aboutMe}
        onChange={formik.handleChange}
      />

      <TextField
        size="small"
        id="lookingForAJobDescription"
        name="lookingForAJobDescription"
        label={profile.lookingForAJobDescription}
        onChange={formik.handleChange}
      />

      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div>
              {key} :
              {
                <TextField
                  id="contacts"
                  name={"contacts." + key}
                  label={profile.contacts[key]}
                  onChange={formik.handleChange}
                />
              }
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default ProfileDataForm;
