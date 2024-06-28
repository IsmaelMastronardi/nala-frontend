export const EmployeesFilters = ({ nameFilter, emailFilter, setNameFilter, setEmailFilter }) => {
  return (
    <div className="filters">
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name"
      />
      <input
        type="text"
        value={emailFilter}
        onChange={(e) => setEmailFilter(e.target.value)}
        placeholder="Filter by email"
      />
    </div>
  );
};