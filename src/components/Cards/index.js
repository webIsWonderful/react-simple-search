import React from 'react';
import uuid from 'uuid';
import CardData from 'src/data/results.json';
import { Consumer } from 'src/components/Context';

import './cards.scss';

const Cards = () => (
  <Consumer>
    {
      context => (
        <section className="cards_wrapper">
          {
            CardData.filter(context.actions.cardSearch(context.searchTerm)).map(item => (
              <ul className="cards_wrapper--card" key={item.name}>
                <li className="cards_wrapper--card_label">{item.name}</li>
                <li>
                  <ul className="cards_wrapper--card_tags">
                    {
                      item.tags.map(tag => (
                        <li key={uuid()}><a href="#">{tag}</a></li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            ))
          }
        </section>
      )
    }
  </Consumer>
);

export default Cards;
