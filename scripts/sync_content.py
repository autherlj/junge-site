import os
import shutil

SOURCE_DIR = os.path.join('content', 'zh')
TARGET_DIR = os.path.join('content', 'en')

def main():
    if not os.path.exists(SOURCE_DIR):
        print(f"Source directory not found: {SOURCE_DIR}")
        return

    print(f"Syncing content from {SOURCE_DIR} to {TARGET_DIR}...")
    
    copied_count = 0
    skipped_count = 0

    for root, dirs, files in os.walk(SOURCE_DIR):
        for file in files:
            # Calculate paths
            src_file = os.path.join(root, file)
            rel_path = os.path.relpath(src_file, SOURCE_DIR)
            dest_file = os.path.join(TARGET_DIR, rel_path)
            
            # Skip if destination exists
            if os.path.exists(dest_file):
                skipped_count += 1
                continue
                
            # Ensure destination directory exists
            os.makedirs(os.path.dirname(dest_file), exist_ok=True)
            
            # Copy file
            shutil.copy2(src_file, dest_file)
            print(f"[Created] {rel_path}")
            copied_count += 1

    print("-" * 30)
    print(f"Sync complete.")
    print(f"Files created: {copied_count}")
    print(f"Files skipped (already exist): {skipped_count}")
    print("Note: The content is copied as-is (in Chinese). You will need to translate the text manually.")

if __name__ == "__main__":
    main()
