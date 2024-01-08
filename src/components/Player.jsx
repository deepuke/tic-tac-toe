import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onUpdatePlayer,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) onUpdatePlayer(symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  const buttonLabel = isEditing ? 'Save' : 'Edit';

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type='text' value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li className={isActive === true ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
