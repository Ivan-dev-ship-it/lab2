import React from "react";
import { Pencil, Trash } from "lucide-react";
import useCountries from "../hooks/useCountries";
import useGroups from "../hooks/useGroups";

export function FriendCard({ Friend, onEdit, onDelete}) {
  const { countries } = useCountries();
  const { groups } = useGroups();

  const countryName = countries?.find(c => c.id === String(Friend.countryId))?.name || "Не указано";
  const groupName = groups?.find(g => g.id === String(Friend.groupId))?.name || "Не указано";

  return (
    <div className="card text-center shadow-sm border-0 rounded-4 p-3 m-2" style={{ width: "230px" }}>
      <img
        src={Friend.avatar || "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"}
        alt={`${Friend.firstName} ${Friend.lastName}`}
        className="rounded-circle mx-auto d-block"
        style={{ width: "110px", height: "110px", objectFit: "cover" }}
      />
      <div className="card-body p-2">
        <h6 className="card-title mb-1 fw-bold" style={{ fontSize: "1.1em" }}>
          {Friend.firstName} {Friend.lastName}
        </h6>
        <p className="card-text text-muted mb-1" style={{ fontSize: "0.9em" }}>
          🌍 {countryName}
        </p>
        <p className="card-text text-muted" style={{ fontSize: "0.9em" }}>
          👥 {groupName}
        </p>
        <div className="d-flex justify-content-center gap-2 mt-2">
          <button className="btn btn-sm btn-outline-warning" onClick={() => onEdit(Friend)}>
            <Pencil size={16} />
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(Friend.id)}>
            <Trash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
