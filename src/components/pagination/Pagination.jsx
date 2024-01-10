"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Pagination({ page, hasPrev, hasNext }) {
    const router = useRouter();

    return (
        <div className={styles.container}>

            <button className={styles.button} >
                <Link href="allblogs">
                    View All Posts
                </Link>
            </button>
        </div>
    );
};

