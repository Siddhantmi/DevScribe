"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

export default function Pagination({ page, hasPrev, hasNext }){
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button
                className={styles.button}

            >
                Previous
            </button>
            <button

                className={styles.button}

            >
                Next
            </button>
        </div>
    );
};

