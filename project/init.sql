DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname = 'C-Square'
  ) THEN
    CREATE ROLE "C-Square" WITH LOGIN PASSWORD 'Vikky98480' CREATEDB;
  ELSE
    RAISE NOTICE 'Role "C-Square" already exists.';
  END IF;
END
$$;