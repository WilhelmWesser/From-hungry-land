import { MigrationInterface, QueryRunner } from "typeorm"

export class insertDataToProduct1675523482242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Potato', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ffresh-white-potatoes%2F318982&psig=AOvVaw1FO4BA4uK5g3sIZA6TlHUI&ust=1675611423632000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDli4-Z_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Tomato', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2Ftomato-beefsteak%2F6000190008474&psig=AOvVaw1cgbVtMMOVY3ZgIYqUcMSX&ust=1675611452465000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjzmJ2Z_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Onions', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FYellow-Onions-3-lb-Bag%2F10447842&psig=AOvVaw0AI2X7A9sZ0twL-_AtI7MJ&ust=1675611469214000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODMgKWZ_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Bell peppers', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Fglossary%2Fpepper-glossary&psig=AOvVaw1t3n6oEVzumC0Kt6lfc0ws&ust=1675611486253000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD7l62Z_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Cucumber', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.plantgrower.org%2Fcucumber.html&psig=AOvVaw2cIIL8TmRDQZjbnX6big3F&ust=1675611504065000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjbtrWZ_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Salad', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Ffresh-green-lettuce-salad-leaves-isolated-white-background-clipping-path-full-depth-field_24710457.htm&psig=AOvVaw0hIqdtzjcK_Rk7L0lmY50k&ust=1675611816626000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDsucqa_PwCFQAAAAAdAAAAABAQ', (SELECT id FROM product_tag WHERE name='herbs'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Spinach', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flettuceinfo.org%2Fproducts%2Fspinach%2F&psig=AOvVaw1QOxrnlFZQK4w4yzEk3wWl&ust=1675611846281000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLj03dia_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='herbs'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Champignons', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jaimefruitsetlegumes.ca%2Ffr%2Faliments%2Fchampignon%2F&psig=AOvVaw1Mp_BCCFX2gaH9wO6Rg7Mv&ust=1675611959469000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCm346b_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='mushrooms'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Banana', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ffresh-bunch-of-bananas%2F377497&psig=AOvVaw2wMSYCZmi9-cyvXDUNBY6f&ust=1675611986648000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD41pub_PwCFQAAAAAdAAAAABAR', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Strawberry', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.compral.it%2Fprodotto%2Fstrawberry%2F&psig=AOvVaw2rH0Qc5fJd4r6Z29n5c3f-&ust=1675612006171000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjagaWb_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Grape', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collinsdictionary.com%2Fit%2Fdizionario%2Finglese%2Fgrape&psig=AOvVaw10gwh-mskkLehMEsllwHQA&ust=1675612022349000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDA1ayb_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Apple', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.applesfromny.com%2Fvarieties%2Fsnapdragon%2F&psig=AOvVaw1gmM31Ye7eFW9Wxgv5qHyx&ust=1675612042503000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODqrrab_PwCFQAAAAAdAAAAABAR', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Watermelon', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gardeningknowhow.com%2Fedible%2Ffruits%2Fwatermelon%2Fpick-a-watermelon.htm&psig=AOvVaw2noKI7WTjiYRq1XmiRp3At&ust=1675612065409000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCEqsGb_PwCFQAAAAAdAAAAABAR', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Orange', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quanta.org%2Forange&psig=AOvVaw1NdRY-yE9br2blxGqOSDAH&ust=1675612087251000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCND5zcub_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Lemon', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffarmfreshcarolinas.com%2Fproduct%2Forganic-lemon-1ct%2F&psig=AOvVaw26spbfzHLlq1MXoqXFUPRk&ust=1675612110466000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDFzdab_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='fruits'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Brown bread', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F62883&psig=AOvVaw21kh5f68ayPV8yCQUBtirQ&ust=1675612196599000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD_9f-b_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='cereals'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('White bread', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FihmmTwR_sliced-bread-transparent-image-sliced-white-bread-hd%2F&psig=AOvVaw1b5W66d8q1BWWl-q6b4ePM&ust=1675612173660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCN8_Sb_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='cereals'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Blueberry', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F546694842277575463%2F&psig=AOvVaw0xl2P6FSmOVY-_OhU9c81r&ust=1675612227136000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiBto6c_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='berries'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Walnut', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fwalnut-png&psig=AOvVaw2OiJxlsABBBY6vUflxUf5C&ust=1675612244171000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjqxJac_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='nuts'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Apple juice', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fstock-images-apple-juice-image14514894&psig=AOvVaw0QOtEOdO6fyb3tbqm_Pv25&ust=1675612306268000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODNi7Sc_PwCFQAAAAAdAAAAABAF', (SELECT id FROM product_tag WHERE name='juices'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Flour', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fflour-png-PNG-free-PNG-Images_137951&psig=AOvVaw0IhOYHE_SdqDivKbGw_lcr&ust=1675612342062000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjRmMWc_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='cereals'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Catfish', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fzoostock%2Fart%2FFish-catfish-on-a-transparent-background-770464234&psig=AOvVaw0mRUoVMTABzkNOcYM5nwZ7&ust=1675612356850000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjjnMyc_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='fish'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Pike', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdnr.maryland.gov%2Ffisheries%2FPages%2Ffish-facts.aspx%3Ffishname%3DNorthern%2BPike&psig=AOvVaw1gd40KcOwg8qqOMVjVwc5t&ust=1675612370096000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCRwtKc_PwCFQAAAAAdAAAAABAf', (SELECT id FROM product_tag WHERE name='fish'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Сhicken egg', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Ffree%2Fegg-png-transparent.html&psig=AOvVaw1iFjLqq4iKx36LPvMhKarL&ust=1675612406327000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC_6OOc_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='eggs'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Milk', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Frealistic-clear-glass-milk-isolated-transparent-background_3917297.htm&psig=AOvVaw1Z3lz0thI5Obm_gTcT8w58&ust=1675612417816000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLi7q-mc_PwCFQAAAAAdAAAAABAZ', (SELECT id FROM product_tag WHERE name='dairy'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Yogurt', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fit%2Fyogurt-png&psig=AOvVaw3SOzcwQ7E1dVhj32VGoNZl&ust=1675612443717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJj0vfWc_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='dairy'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Ice cream', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimages%2Fpng-ice-cream-ball.html&psig=AOvVaw10Q1XMMHuTGCmrLlPsF2TU&ust=1675612459775000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCvr_2c_PwCFQAAAAAdAAAAABAK', (SELECT id FROM product_tag WHERE name='dairy'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Butter', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2w7y3u2o0e6q8o0_562-transparent-butter-png%2F&psig=AOvVaw0QDl-KZNZMSFU5NiEVJkjD&ust=1675612494336000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiD7o2d_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='dairy'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Sugar', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thecrossroadsprogram.com%2Fcocaine-addiction%2F&psig=AOvVaw31ZLC3df_8g5T1_Z7wZlUr&ust=1675618789738000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLj5y8e0_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='spices'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Olive oil', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_70050730_olive-oil-in-a-glass-bottle-with-handle-and-corck-and-olives-with-green-leaves-realistic-vector-illu.html&psig=AOvVaw3NpVigsUCvq8pPJV4TE6qf&ust=1675619426808000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiBtPe2_PwCFQAAAAAdAAAAABAZ', (SELECT id FROM product_tag WHERE name='oil'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Chicken', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F33503-chicken-meat-transparent-background&psig=AOvVaw0KhkgEMCvbBeWibHcBGeAV&ust=1675619908080000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCr8ty4_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='meat'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Garlic', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Ffree%2Fgarlic-transparent-background.html&psig=AOvVaw2Gzqc2LN6iFlG53zKcEBp8&ust=1675619939468000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCR7eu4_PwCFQAAAAAdAAAAABAI', (SELECT id FROM product_tag WHERE name='vegetables'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Rice', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Frice&psig=AOvVaw1fge7yEdHmyZTyWMRqdJYl&ust=1675619956992000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjaovS4_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='porridge'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Dark chocolate', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fdark-chocolate-transparent-PNG-free-PNG-Images_88415&psig=AOvVaw2Twa1VPuMsSy_iNEHSVYnT&ust=1675619981380000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID38v-4_PwCFQAAAAAdAAAAABAE',(SELECT id FROM product_tag WHERE name='chocolate'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Milk chocolate', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhmTbwRh_milk-chocolate-transparent-background-hd-png-download%2F&psig=AOvVaw0MHXRvIP3uPpxmOfDVEEEG&ust=1675619996762000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCvlIe5_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='chocolate'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('White chocolate', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FThxmbR_white-chocolate-png-white-chocolate-transparent-png%2F&psig=AOvVaw0dZ5f17ZeOhSEPHx18Z8mr&ust=1675620016197000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJj4vJC5_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='chocolate'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Mozzarella', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Ffree%2Fmozzarella.html&psig=AOvVaw1ex5MrYQf_0mVywYk8QfLJ&ust=1675620032666000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDIp5i5_PwCFQAAAAAdAAAAABAI', (SELECT id FROM product_tag WHERE name='dairy'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Sunflower oil', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F110749&psig=AOvVaw1tAnlVHO4xg5c-XRh03Ico&ust=1675620055334000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDgmKO5_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='oil'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Powder', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Fphoto%2F132630%2Fpowder-png&psig=AOvVaw1tzkGn0AfY_DOwZr1XeNAk&ust=1675620072500000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKj9rau5_PwCFQAAAAAdAAAAABAJ', (SELECT id FROM product_tag WHERE name='spices'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Salt', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fprussiaart%2Fart%2FParticles-of-salt-on-a-transparent-background-696984649&psig=AOvVaw2sOhwfLYhLStwV4x5k6dBD&ust=1675620102262000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjjxbm5_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='spices'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Honey', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fhoney-png-PNG-free-PNG-Images_137689&psig=AOvVaw17JUxEux8VvjYNDiM6-_I1&ust=1675620131196000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCSqce5_PwCFQAAAAAdAAAAABAg', (SELECT id FROM product_tag WHERE name='spices'))`)
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Pasta', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F43741&psig=AOvVaw3qDRx2n72RJbBhYxXK3i-E&ust=1675625708733000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjZ5KrO_PwCFQAAAAAdAAAAABAE', (SELECT id FROM product_tag WHERE name='porridge'))`)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM product`)
    }

}
