export const UserPanel = ({ filterByUser, users }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
    >
      All
    </a>
    {users.map(user => (
      <a
        data-cy="FilterUser"
        href="#/"
        key={user.id}
        onClick={event => filterByUser(event.target.value)}
      >
        {user.name}
      </a>
    ))}
  </p>
);
