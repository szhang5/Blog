import React from 'react';
import { forEach, map } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/pofolio.css';
import responsive from '../assets/styles/responsive.css';

const getPofolioByMonth = (pofolios) => {
  const results = {};
  forEach(pofolios, pofolio => {
    const monthYear = moment(pofolio.createdAt).format('YYYY-MM');
    if (monthYear in results) {
      results[monthYear].push(pofolio);
    } else {_
      results[monthYear] = [pofolio];
    }
  })
  const keys = Object.keys(results).reverse();
  return { keys, results };
};

const Pofolio = ({ data: { loading, pofolios } }) => {
  if (!loading) {
    const { keys, results: pofoliosByMonth } = getPofolioByMonth(pofolios);
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          <div className={styles.content}>
          {
            map(keys, monthYear => {
              const pofolios = pofoliosByMonth[monthYear];
              return (
                <div key={monthYear}>
                  <div className={gridStyles.row}>
                    <div className={[gridStyles.col, gridStyles['span-1-of-12']].join(' ')} />
                    <div className={[gridStyles.col, gridStyles['span-11-of-12']].join(' ')}>
                      <div className={[styles.date, responsive.date].join(' ')}>{moment(monthYear).format('MMMM YYYY')}</div>
                    </div> 
                  </div>
                  {
                    map(pofolios, pofolio => {
                      return(
                        <div key={pofolio.id} className={gridStyles.row}>
                          <div className={[gridStyles.col, gridStyles['span-1-of-4']].join(' ')}>
                            <article className={styles.rightContent}>
                              <h4>{moment(pofolio.createdAt).format('dddd Do')}</h4>
                            </article>
                          </div>
                          <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
                            <article className={[styles.leftContent, responsive.leftContent].join(' ')} key={pofolio.id}>
                              <h2>{pofolio.title}</h2>
                              <img className={styles.postImg} src={pofolio.image.url} alt="PofolioImage" />
                              <p className={styles.pofolioContent}  dangerouslySetInnerHTML={{ __html: pofolio.content }} />
                            </article>
                          </div>
                        </div>);
                    })
                  }
                </div>
              )})
          }
          </div>
        </div>
      </div>
    );
  }

  return <h2>Loading images...</h2>;
};

const Pofolios = gql`
 query pofolios {
  pofolios (where: {
    status: PUBLISHED
  }){
    createdAt
    id
    title
    content
    image {
      url
    } 
  }
}
`;

Pofolio.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Pofolios)(Pofolio);
