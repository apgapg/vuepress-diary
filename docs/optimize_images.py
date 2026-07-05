import os
from PIL import Image, ImageFile

# Allow loading of truncated images
ImageFile.LOAD_TRUNCATED_IMAGES = True

public_dir = "src/.vuepress/public"

for root, dirs, files in os.walk(public_dir):
    for file in files:
        ext = os.path.splitext(file.lower())[1]
        if ext in [".png", ".jpg", ".jpeg"]:
            filepath = os.path.join(root, file)
            print(f"Optimizing {filepath}...")
            img = Image.open(filepath)
            
            # Record original size
            orig_size = os.path.getsize(filepath)
            
            # Resize if wider than 1200px
            max_width = 1200
            if img.width > max_width:
                height = int((max_width / img.width) * img.height)
                img = img.resize((max_width, height), Image.Resampling.LANCZOS)
            
            # Save optimized image based on extension
            if ext == ".png":
                img.save(filepath, "PNG", optimize=True)
            elif ext in [".jpg", ".jpeg"]:
                # Convert to RGB mode if it has transparency (RGBA/LA)
                if img.mode in ("RGBA", "LA"):
                    img = img.convert("RGB")
                img.save(filepath, "JPEG", optimize=True, quality=85)
                
            new_size = os.path.getsize(filepath)
            print(f"Size reduced from {orig_size/1024/1024:.2f}MB to {new_size/1024/1024:.2f}MB ({((orig_size - new_size)/orig_size)*100:.1f}% reduction)")
