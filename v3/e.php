 <?php
            $iphone = strpos($_SERVER["HTTP_USER_AGENT"],"iPhone");
            $android = strpos($_SERVER["HTTP_USER_AGENT"],"Android");
            //$palmpre = strpos($_SERVER["HTTP_USER_AGENT"],"webOS");
            $berry = strpos($_SERVER["HTTP_USER_AGENT"],"BlackBerry");
            $nokia = strpos($_SERVER["HTTP_USER_AGENT"],"SymbianOS");
            //$ipod = strpos($_SERVER["HTTP_USER_AGENT"],"iPod");
            echo "test";
            if ($iphone !== FALSE || $android !== FALSE || $berry !== FALSE || $nokia !== FALSE) 
            { 
            //header("Location: http://mobile.site.com/");
            
            echo "<script>window.location='http://test.pramithprakash.com'</script>";
            }
			 echo "test1";
            ?>