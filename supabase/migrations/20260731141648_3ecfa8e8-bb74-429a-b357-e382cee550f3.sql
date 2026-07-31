REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role, supabase_auth_admin;

CREATE POLICY "Users can read their own files"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'export_260625' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can upload their own files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'export_260625' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can update their own files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'export_260625' AND (storage.foldername(name))[1] = auth.uid()::text)
WITH CHECK (bucket_id = 'export_260625' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can delete their own files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'export_260625' AND (storage.foldername(name))[1] = auth.uid()::text);