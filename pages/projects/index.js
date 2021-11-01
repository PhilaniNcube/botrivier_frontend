import React, { Fragment } from 'react';
import { ProjectHero } from '../../components/projects/ProjectHero';
import { ProjectList } from '../../components/projects/ProjectList';
import { API_URL } from '../../config';

const index = ({ projects }) => {
  return (
    <Fragment>
      <ProjectHero />
      <ProjectList projects={projects} />
    </Fragment>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/projects`);
  const projects = await res.json();

  return {
    props: { projects },
  };
}
