import { useState } from "react";
import { getConnection } from "@/Utils/db"; 
import { Label, Listbox } from "@headlessui/react";

export default async function  BodSelect() {
  const pool = await getConnection();
  const QuerylistBod = await pool.request().query('SELECT * FROM BDSThienKhoiUsers.dbo.Bod where Hide = 0');
  const listBod = QuerylistBod.recordset;
  const [selected, setSelected] = useState(listBod[0])

  return (
    <Listbox>
      <Label className="block text-sm/6 font-medium text-gray-900">Chi nhánh</Label>
      <div className="relative mt-2">
        
      </div>
    </Listbox>
  );
}