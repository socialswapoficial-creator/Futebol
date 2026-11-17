CREATE TABLE `registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`student` text NOT NULL,
	`birth` text NOT NULL,
	`guardian` text NOT NULL,
	`phone` text NOT NULL,
	`notes` text NOT NULL,
	`status` text DEFAULT 'Novo interesse' NOT NULL,
	`created` text NOT NULL,
	`consent` text NOT NULL
);
