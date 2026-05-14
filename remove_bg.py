from PIL import Image

def remove_white_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop the image to its bounding box to remove any actual borders
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(img_path, "PNG")
    print(f"Successfully processed {img_path}")

if __name__ == "__main__":
    remove_white_background(r"c:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\dhc_logo_official.png")
