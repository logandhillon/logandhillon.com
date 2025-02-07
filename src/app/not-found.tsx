"use client";

import Header from "@/components/header";
import { Button, ButtonGroup } from "@heroui/react";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";

export default function NotFound() {
  return (
    <div className="">
      <Header />

      <section className="container mx-auto p-5 text-center mt-32 mb-72 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">
          <Typewriter
            words={["Whoops!", "404 Not Found :("]}
            loop={1}
            typeSpeed={80}
            delaySpeed={1000}
            deleteSpeed={40}
            cursor
            cursorStyle={
              <span className="font-light text-default-500 animate-pulse">
                |
              </span>
            }
          />
        </h1>
        <p className="mb-4">
          The content you&apos;re looking for could not be found.
          <br />
          Sorry about that.
        </p>

        <ButtonGroup>
          <Button color="primary" as={Link} href="/">
            Go Home
          </Button>
          <Button onPress={() => window.history.back()}>Go Back</Button>
        </ButtonGroup>
      </section>
    </div>
  );
}
