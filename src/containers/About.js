import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Icon } from 'react-icons-kit';
import { blackTie } from 'react-icons-kit/fa/blackTie';
import { graduationCap } from 'react-icons-kit/fa/graduationCap';
import { wrench } from 'react-icons-kit/fa/wrench';
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp';
import { trophy } from 'react-icons-kit/fa/trophy';
import Header from '../components/Header';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/about.css';


const About = ({ data: { loading, resumes } }) => {
  if (!loading) {
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          {resumes.map(resume => (
            <div key={resume.id} className={styles.content}>
              <div className={gridStyles.row}>
                <div className={[gridStyles.col, gridStyles['span-1-of-11']].join(' ')} />
                <div className={[gridStyles.col, gridStyles['span-10-of-11']].join(' ')}>
                  <article className={styles.leftContent}>
                    <div className={styles.section}>
                      <h2>
                        <div className={styles.blackTie}>
                          <span>
                            <Icon size={28} icon={blackTie} />
                          </span>
                          {resume.work}
                        </div>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: resume.workContent }} />
                    </div>
                    <div className={styles.section}>
                      <h2>
                        <div className={styles.graduationCap}>
                          <span>
                            <Icon size={28} icon={graduationCap} />
                          </span>
                          {resume.education}
                        </div>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: resume.educationContent }} />
                    </div>
                    <div className={styles.section}>
                      <h2>
                        <div className={styles.wrench}>
                          <span>
                            <Icon size={28} icon={wrench} />
                          </span>
                          {resume.project}
                        </div>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: resume.projectContent }} />
                    </div>
                    <div className={styles.section}>
                      <h2>
                        <div className={styles.thumbsOUp}>
                          <span>
                            <Icon size={28} icon={thumbsOUp} />
                          </span>
                          {resume.skill}
                        </div>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: resume.skillContent }} />
                    </div>
                    <div className={styles.section}>
                      <h2>
                        <div className={styles.trophy}>
                          <span>
                            <Icon size={28} icon={trophy} />
                          </span>
                          {resume.honors}
                        </div>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: resume.honorsContent }} />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <h2>Loading profile...</h2>;
};

const Resume = gql`
 query resumes {
  resumes {
    id
    name
    profilepic {
      url
    }
    introduction
    education
    educationContent
    skill
    skillContent
    project
    projectContent
    honors
    honorsContent
    work
    workContent
  }
}
`;

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Resume)(About);
