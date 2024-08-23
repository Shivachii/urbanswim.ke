"use client";
import React, { useState, useEffect } from "react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Men = () => {
  const [users, setUsers] = useState<any[]>([]); // State to hold the users data

  useEffect(() => {
    async function fetchUsers() {
      try {
        const allUsers = await prisma.user.findMany();
        setUsers(allUsers); // Set the fetched users data to state
      } catch (e) {
        console.error(e);
      } finally {
        await prisma.$disconnect();
      }
    }

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main className="relative p-4 m-4">
      <div className="">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              {/* Render other user properties as needed */}
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </main>
  );
};

export default Men;
