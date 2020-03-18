import React, { useState, useContext, useMemo, createContext } from "react";
import PropTypes from "prop-types";
import { MdMoreHoriz } from "react-icons/md";

import availableActions from "~/resources/actions";

import { ActionsList } from "./styles";

export const ActionsContext = createContext([]);

export const WithContext = (
  actionsContext,
  item,
  setSelectedItem,
  modalIsVisible = false
) => (
  <ActionsContext.Provider value={actionsContext}>
    <Actions
      item={item}
      setSelectedItem={setSelectedItem}
      modalIsVisible={modalIsVisible}
    />
  </ActionsContext.Provider>
);

export default function Actions({ modalIsVisible, item, setSelectedItem }) {
  const [visible, setVisible] = useState(false);

  useMemo(() => {
    setVisible(!modalIsVisible && visible);
  }, [modalIsVisible, visible]);

  const actionsIconSize = 15;
  const actions = useContext(ActionsContext);

  function handleToggleVisible() {
    setVisible(!visible);
    setSelectedItem(item);
  }

  return (
    <>
      <button type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={24} color="#666666" />
      </button>
      <ActionsList visible={visible}>
        {actions.map(action => {
          const actionTheme = availableActions.get(action.name);
          const Icon = actionTheme.icon;

          return (
            <li key={action.name}>
              <button type="button" onClick={action.onClick}>
                <Icon size={actionsIconSize} color={actionTheme.color} />
                {actionTheme.name}
              </button>
            </li>
          );
        })}
      </ActionsList>
    </>
  );
}

Actions.propTypes = {
  modalIsVisible: PropTypes.bool,
  item: PropTypes.shape({}).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

Actions.defaultProps = {
  modalIsVisible: false,
};
