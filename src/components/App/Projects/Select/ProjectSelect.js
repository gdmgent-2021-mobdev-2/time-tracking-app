import React, { useEffect, useState } from 'react';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import Select from '../../../Design/Select';
import { fetchProjects } from '../../../../core/modules/projects/api';

const ProjectSelect = (props) => {
    const withAuth = useAuthApi();

    const [projects, setProjects] = useState();

    useEffect(() => {
        withAuth(fetchProjects())
            .then((data) => {
                setProjects(data);
            })
            .catch((e) => {
                // todo
                console.log(e);
            });
    }, [withAuth]);

    const options = projects
        ? projects.map((c) => ({ value: c._id, label: c.name }))
        : null;

    return <Select options={options} {...props} />;
};

export default ProjectSelect;
