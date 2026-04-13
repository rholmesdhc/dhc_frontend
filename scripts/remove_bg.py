import os
import shutil
from rembg import remove
from PIL import Image
import io

def process_images(directory):
    # Create backup directory
    backup_dir = os.path.join(directory, 'backup')
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
        print(f"Created backup directory: {backup_dir}")

    # Process each image
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')) and os.path.isfile(os.path.join(directory, filename)):
            input_path = os.path.join(directory, filename)
            backup_path = os.path.join(backup_dir, filename)
            
            # Backup the original
            shutil.copy2(input_path, backup_path)
            print(f"Backed up: {filename}")

            try:
                # Open image
                with open(input_path, 'rb') as f:
                    img_data = f.read()
                
                # Remove background
                print(f"Removing background for: {filename}...")
                output_data = remove(img_data)
                
                # Save processed image back (always as PNG to support transparency)
                # If original was JPG, keep filename extension or change to .png?
                # User specifically asked for this folder, mostly PNGs.
                # Let's save as same filename.
                with open(input_path, 'wb') as f:
                    f.write(output_data)
                
                print(f"Successfully processed: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")

if __name__ == "__main__":
    target_directory = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\executives"
    process_images(target_directory)
